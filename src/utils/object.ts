export function changeAttributesNames(
    obj: object,
    attributeMapping?: Record<string, string>,
): Record<string, unknown> {
    const mappings: Record<string, string> = {
        created_at: 'createdAt',
        updated_at: 'updatedAt',
        ...(attributeMapping || {}),
    }

    const result: Record<string, unknown> = {};

    Object.entries(obj).forEach(([key, value]) => {
        if (key === 'created_at') {
            result['createdAt'] = value;
        }

        if (key === 'updated_at') {
            result['updatedAt'] = value;
        }

        if (key in mappings) {
            const newKey = mappings[key];
            result[newKey] = value;
        } else {
            result[key] = value;
        }
    });

    return result;
}
