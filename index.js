function findMatching(drivers, attribute)
  {
     
        return drivers.filter(function(driver) {
            if (driver.toLowerCase() === attribute.toLowerCase())
            {
                return driver;
            }
        })


  }
  function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
  }
  
  function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }