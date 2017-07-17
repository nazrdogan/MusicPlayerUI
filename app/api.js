import axios from "axios";

/**
 * 
 * 
 * @export
 * @returns 
 */
export function GetTrackInfo() {
  return axios
    .get(
      "https://gist.githubusercontent.com/bgdavidx/9458ff3ae6054a28e0a636367ff77bbf/raw/990adb44389595174da8fc5ec890045e0db66495/gistfile1.txt"
    )
    .then(response => {
      return response.data;
    })
    .catch(function(error) {
      throw error;
    });
}
