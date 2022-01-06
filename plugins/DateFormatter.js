export const StringMonthAndDay = (date) => {
    let month = date.split('-')[1]
    const day = date.split('-')[2]
    switch (month) {
        case '01':
            month = 'Ocak'
            break;
        case '02':
            month = 'Şubat'
            break;
        case '03':
            month = 'Mart'
            break;
        case '04':
            month = 'Nisan'
            break;
        case '05':
            month = 'Mayıs'
            break;
        case '06':
            month = 'Haziran'
            break;
        case '07':
            month = 'Temmuz'
            break;
        case '08':
            month = 'Ağustos'
            break;
        case '09':
            month = 'Eylül'
            break;
        case '10':
            month = 'Ekim'
            break;
        case '11':
            month = 'Kasım'
            break;
        case '12':
            month = 'Aralık'
            break;
        default:
            break;
    }
    return `${month}, ${day}`
}