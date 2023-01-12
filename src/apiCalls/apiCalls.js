const getData = async (type, path, criteria) => {
  try {
    const response = await fetch(`https://api.nytimes.com/svc/${type}/v2/${path}.json?${criteria}api-key=${process.env.REACT_APP_NYT_KEY}`)
    if (!response.ok) {
      throw new Error();
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return error;
  }
}

export {
  getData
}