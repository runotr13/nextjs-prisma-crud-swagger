const findIp = async () => {
  try {
    const response2 = await fetch("https://api.ipify.org/?format=json");
    return response2?.json()
  } catch (error) {
    console.error("Error fetching IP data:", error);
  }
};
export default findIp;
