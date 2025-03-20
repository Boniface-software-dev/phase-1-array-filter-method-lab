// Code your solution here
// Function 1: findMatching
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Function 2: fuzzyMatch
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }
  
  // Function 3: matchName
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  
  // Example usage:
  const drivers = ["Muguro", "Dennis", "Samantha", "Sebastian", "Saul"];
  console.log(findMatching(drivers, "Muguro")); 
  console.log(fuzzyMatch(drivers, "Mu"));
  
  const driverObjects = [
    { name: "Muguro", hometown: "New York" },
    { name: "Dennis", hometown: "Los Angeles" },
    { name: "Samantha", hometown: "Chicago" },
  ];
  console.log(matchName(driverObjects, "Muguro")); // Output: [{ name: "muguro", hometown: "Los Angeles" }]
   