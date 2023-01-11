const getData = async (path) => {
  try {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${path}.json?api-key=${process.env.REACT_APP_NYT_KEY}`)
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