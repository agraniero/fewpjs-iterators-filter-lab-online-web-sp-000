function findMatching(drivers, name){
  drivers.filter(function (driverName){
    return driverName.toLowerCase === drivers.name;
  });
}
