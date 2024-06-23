
const work = ({ workTime = null, breakTime = null}) => {
  console.log(`Working for ${workTime} minutes`);
  setTimeout(() => {
    console.log(`Taking a break for ${breakTime} minutes`);
    setTimeout(() => {
      work({ workTime, breakTime });
    }, breakTime * 60 * 1000);
  }, workTime * 60 * 1000);
}

export default work;