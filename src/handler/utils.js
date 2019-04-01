Date.prototype.formatDate = function(format, utc) {
  let date = this,
    day = utc ? date.getUTCDate() : date.getDate(),
    month = (utc ? date.getUTCMonth() : date.getMonth()) + 1,
    year = utc ? date.getUTCFullYear() : date.getFullYear(),
    hours = utc ? date.getUTCHours() : date.getHours(),
    minutes = utc ? date.getUTCMinutes() : date.getMinutes(),
    seconds = utc ? date.getUTCSeconds() : date.getSeconds()

  if (!format) {
    format = 'MM/dd/yyyy'
  }

  format = format.replace('MM', month.toString().replace(/^(\d)$/, '0$1'))

  if (format.indexOf('yyyy') > -1) {
    format = format.replace('yyyy', year.toString())
  } else if (format.indexOf('yy') > -1) {
    format = format.replace('yy', year.toString().substr(2, 2))
  }

  format = format.replace('dd', day.toString().replace(/^(\d)$/, '0$1'))

  if (format.indexOf('t') > -1) {
    if (hours > 11) {
      format = format.replace('t', 'pm')
    } else {
      format = format.replace('t', 'am')
    }
  }

  if (format.indexOf('HH') > -1) {
    format = format.replace('HH', hours.toString().replace(/^(\d)$/, '0$1'))
  }

  if (format.indexOf('hh') > -1) {
    if (hours > 12) {
      hours -= 12
    }

    if (hours === 0) {
      hours = 12
    }
    format = format.replace('hh', hours.toString().replace(/^(\d)$/, '0$1'))
  }

  if (format.indexOf('mm') > -1) {
    format = format.replace('mm', minutes.toString().replace(/^(\d)$/, '0$1'))
  }

  if (format.indexOf('ss') > -1) {
    format = format.replace('ss', seconds.toString().replace(/^(\d)$/, '0$1'))
  }

  return format
}
