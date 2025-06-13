import { changeAttributesNames } from '@/utils/object';

export class BaseDTO {
    protected static transform<T extends Record<string, unknown>>(
        obj: T,
        mappings: Record<string, string>
    ) {
        return changeAttributesNames(obj, mappings);
    }

    protected static transformMany<T extends Record<string, unknown>>(
        items: T[],
        mappings: Record<string, string>
    ) {
        return items.map((item) => this.transform(item, mappings));
    }
}
