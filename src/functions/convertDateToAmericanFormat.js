function convertDateToAmericanFormat(data) {
    const [day, month, years] = data.split('/' || '-' || '.').map(Number);
    return isNaN(day) || isNaN(month) || isNaN(years) ? "Formato de data inválido. Use dd/mm/aaaa." : new Date(years, month - 1, day).toISOString().split('T')[0];
}

module.exports = convertDateToAmericanFormat;