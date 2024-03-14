import axios from "axios";

export const fetchData = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    console.log('end', data)
    return data;
  } catch (error) {
    console.error(error);
  }
};
