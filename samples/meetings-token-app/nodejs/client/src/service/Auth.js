export default function AuthService(teamsClient) {
    return function () {
        return new Promise((resolve, reject) => {
            // teamsClient.GetParticipant();
            teamsClient.authentication.getAuthToken({
                successCallback: function (token) {
                    console.log(token);
                    resolve(token)
                },
                failureCallback: function (error) {
                    console.error("Failed to get auth: ", error)
                    reject(error);
                },
            })
        });
    }
}