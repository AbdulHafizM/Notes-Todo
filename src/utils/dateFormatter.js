const monthObject = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December' 
}


const dateFormatter = (date) => {
   let d = date.split('T').slice(0,1)[0].split('-')
   let year = d[0]
   let month = d[1]
   let day = d[2]
   return `${day} ${monthObject[month]} ${year}`
}

const timeFormatter = (date) => {
    let am = ''
    let d = date.split('T').slice(1)[0].split(':')
    let h = Number(d[0]) + 1
    h >= 12 ?  am = 'PM' : am = 'AM'
    let min = d[1]
    return `${h}:${min} ${am}`
}

export {dateFormatter, timeFormatter}