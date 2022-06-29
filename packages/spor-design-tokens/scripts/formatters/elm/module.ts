import { Format, Named, File, TransformedToken, formatHelpers } from 'style-dictionary';

const moduleNamePrefix = 'Spor.Token';
const defaultIndentation = '    ';

export const elmFormatter: Named<Format> = {
    name: 'elm/module',
    formatter: function({ dictionary, file }) {
        const moduleName = generateModuleName(file.options);
        const moduleType = generateModuleType(file.options);

        const exposing = moduleType.exposings().concat(
            dictionary
                .allProperties
                .map((prop) => prop.name)
        )
        .join(', ');

        const fileHeader = formatHelpers.fileHeader({
            file: file,
            formatting: {
                prefix: defaultIndentation,
                lineSeparator: '\n',
                header: '{-\n',
                footer: '\n-}'
            }
        });

        const definitions = moduleType.definitions().concat(
            dictionary
                .allProperties
                .map((prop) => moduleType.generateElmConstant(prop))
                .flat()
        );

        return [
            `module ${moduleName} exposing (${exposing})`,
            '',
            fileHeader,
            '',
            `{-| @docs ${exposing} -}`,
            '',
        ].concat(...moduleType.imports(), '')
         .concat(...definitions)
         .join('\n');
    }
};

function generateModuleName(options: any): string {
    return `${moduleNamePrefix}.${options.category}.${options.type}`;
}


type ModuleWrappedType = {
    name: string;
    construct: (input: string) => string;
};

class ModuleType {
    name: string;
    wrappedType: ModuleWrappedType;

    constructor(name: string, wrappedType: ModuleWrappedType) {
        this.name = name;
        this.wrappedType = wrappedType;
    }

    imports(): Array<string> {
        const wrapped = this.wrappedType.name;

        if (['Int', 'Float', 'String'].includes(wrapped)) {
            return [];
        } 

        return [ 'import Css' ];
    }

    exposings(): Array<string> {
        return [
            this.name,
            this.unwrapperName()
        ];
    }

    unwrapperName(): string {
        const wrapped = this.wrappedType.name;

        let unwrapper;
        if (['Int', 'Float', 'String'].includes(wrapped)) {
            unwrapper = `to${wrapped}`;
        } else {
            unwrapper = 'toCss';
        }

        return unwrapper;
    }

    definitions(): Array<string> {
        const unwrapperName = this.unwrapperName();

        return [
            '{-| -}',
            `type ${this.name} =`,
                `${defaultIndentation}${this.name} ${this.wrappedType.name}`,
            '',
            `{-| Convert ${this.name} into a ${this.wrappedType.name} -}`,
            `${unwrapperName} : ${this.name} -> ${this.wrappedType.name}`,
            `${unwrapperName} (${this.name} value) =`,
                `${defaultIndentation}value`,
            ''
        ];
    }

    generateElmConstant(token: TransformedToken): Array<string> {
        return [
            `{-| ${token.comment || ''} -}`,
            `${token.name} : ${this.name}`,
            `${token.name} =`,
                `${defaultIndentation}${this.name} <| ${this.wrappedType.construct(token.value)}`,
            '',
            ''
        ];
    }
};


const intTypeConstruction: ModuleWrappedType = {
    name: 'Int',
    construct(input: string): string {
        return input;
    }
};

const floatTypeConstruction: ModuleWrappedType = {
    name: 'Float',
    construct(input: string): string {
        return input;
    }
};

const stringTypeConstruction: ModuleWrappedType = {
    name: 'String',
    construct: asString
};

const colorTypeConstruction: ModuleWrappedType = {
    name: 'Css.Color',
    construct: colorConstructor
};

function colorConstructor(input: string): string {
    if (input.startsWith('#')) {
        return `Css.hex ${asString(input)}`
    } else if (input.startsWith('rgba')) {
        // remove the first five characters 'rgba(' and the last character ')
        const args = input.slice(5, -1).split(',').map((s: string) => s.trim());
        return `Css.rgba ${args[0]} ${args[1]} ${args[2]} ${args[3]}`
    }

    throw new Error(`Don\'t know how to handle this color value: ${input}`);
}

const pxTypeConstruction: ModuleWrappedType = {
    name: 'Css.Px',
    construct: sizeConstructor
};

function sizeConstructor(input: string): string {
    if (input === '0') {
        return 'Css.zero';
    } else if (input.endsWith('px')) {
        const rawValue = input.replace(/px$/, '');
        return `Css.px ${rawValue}`;
    }

    throw new Error(`Don\'t know how to handle this size value: ${input}`);
}

const shadowTypeConstruction: ModuleWrappedType = {
    name: 'Css.Style',

    construct(input: string): string {
        const rgbaRegex = /rgba\(.*\)/;

        const color = colorConstructor((input.match(rgbaRegex) || [])[0] || '');
        const sizes = input
            .replace(rgbaRegex, '')
            .trim()
            .split(/\s/)
            .map(arg => sizeConstructor(arg));

        const args = sizes.concat(color).map(arg => `(${arg})`);

        switch(args.length) {
            case 4: return `Css.boxShadow4 ${args.join(' ')}`;
            case 5: return `Css.boxShadow5 ${args.join(' ')}`;
            default:
                throw new Error(`Don\'t know how to handle this box-shadow value: ${input}`);
        }
    }
};

const moduleTypeInnerType: Map<string, ModuleWrappedType> = new Map([
    ['Alias', colorTypeConstruction],
    ['Background', colorTypeConstruction],
    ['Detail', colorTypeConstruction],
    ['Error', colorTypeConstruction],
    ['Linjetag', colorTypeConstruction],
    ['Main', colorTypeConstruction],
    ['Outline', colorTypeConstruction],
    ['Palette', colorTypeConstruction],
    ['Product', colorTypeConstruction],
    ['Text', colorTypeConstruction],
    ['Shadow', shadowTypeConstruction],
    ['ZIndex', intTypeConstruction],
    ['BorderRadius', pxTypeConstruction],
    ['Breakpoint', pxTypeConstruction],
    ['LineHeight', floatTypeConstruction],
    ['Spacing', pxTypeConstruction],
    ['Stroke', pxTypeConstruction]
]);

function generateModuleType(options: any): ModuleType {
    const wrappedType = moduleTypeInnerType.get(options.type) || stringTypeConstruction;
    return new ModuleType(options.type, wrappedType);
}

function asString(input: any): string {
    return `\"${input.toString().replaceAll('"', '\\"')}\"`;
}
