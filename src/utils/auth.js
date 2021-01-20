import axios from "axios";
// const url = "https://kwaba.com.ng";
const url = "https://kwaba-svr.herokuapp.com";

export const isAuthenticated = async () => {
    try {
        const result = await axios.get(`${url}/api/renter/auth/verify`, {
            headers: {
                "x-auth-token": localStorage.getItem("token")
            }
        });
        console.log(result, 'RESULT');
        if (!result.data) throw new Error();

        if (result.data.success) return true

    } catch (e) {
        console.log(e);
        return false
    }
}