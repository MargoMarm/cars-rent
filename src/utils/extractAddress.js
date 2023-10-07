const extractAddress = (addressString) => {
	if (addressString) {
		
		const [, city, country] = addressString.split(",");
		const address = {
			city, country
		}

		return address
	}
	return
};

export default extractAddress;
