module.exports = {
    formatParamsToWhereAndOthers: (params) => {
        const { current = 1, pageSize = 20, ...others } = params;
        return {
            wheres: {
                ...others
            },
            offset: (current - 1) * pageSize,
            limit: pageSize,
        };
    },
    formatBodyToData: (bodyParams) => {
        const { index, ...others } = bodyParams
        return others
    }
}