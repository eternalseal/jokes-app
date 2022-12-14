export type Joke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

export const getRandomJokes = () => {
  return {
    queryFn(): Promise<Joke> {
      return fetch('https://official-joke-api.appspot.com/random_joke')
        .then((response) => response.json())
        .then((data) => data as Joke);
    },
    queryKey: ['getRandomJokes'],
  };
};
