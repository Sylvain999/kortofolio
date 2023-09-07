import * as internationalization from '../_internationalization/internationalization.json'


export function getInternationalizationFile() {
    return structuredClone(internationalization);
}