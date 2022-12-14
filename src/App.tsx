import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import Button from './components/Button';
import { getRandomJokes } from './services/jokes';

function App() {
  const [showPunchLine, setShowPunchLine] = React.useState(false);
  const handleApiButtonClick = () => {
    window.open('https://github.com/15Dkatz/official_joke_api', '_blank');
  };
  const { data, status, refetch, fetchStatus } = useQuery({
    ...getRandomJokes(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const toggleShowPunchLine = () => {
    setShowPunchLine((show) => !show);
  };

  const getNewJoke = () => {
    setShowPunchLine(false);
    refetch();
  };

  const loading = status === 'loading' || fetchStatus === 'fetching';
  const success = !loading && status === 'success';
  const error = !loading && status === 'error';

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="container mx-auto">
        <header className="flex gap-5 pt-12 pb-8 border-b sm:justify-between px-2 flex-wrap sm:flex-nowrap justify-center">
          <Button onClick={getNewJoke}>Get a new Random Joke</Button>

          <button
            type="button"
            className="text-blue-500 text-base underline"
            onClick={handleApiButtonClick}
          >
            View API Docs
          </button>
        </header>
        <main className="pt-12">
          {loading ? (
            <p className="text-base text-gray-600 uppercase text-center font-semibold">
              Loading Your jokes
            </p>
          ) : null}

          {success ? (
            <main className="flex flex-col px-8">
              <div className="relative flex items-center">
                <FaQuoteLeft className=" text-gray-200 text-7xl z-10 shrink-0" />
                <p className="text-black text-xl z-20 relative -left-10">
                  {data?.setup}
                </p>
              </div>

              <Button
                intent="secondary"
                className="my-16 self-center"
                onClick={toggleShowPunchLine}
              >
                {!showPunchLine ? 'Show Punchline' : 'Hide Punchline'}
              </Button>

              {showPunchLine ? (
                <div className="relative flex items-center ml-auto">
                  <p className="text-black text-xl z-20 relative -right-10 ">
                    {data?.punchline}
                  </p>
                  <FaQuoteRight className=" text-gray-200 text-7xl z-10 shrink-0" />
                </div>
              ) : null}
            </main>
          ) : null}

          {error ? (
            <p className="text-base text-red-600 uppercase text-center font-semibold">
              There was an error loading your joke.
            </p>
          ) : null}
        </main>
      </div>
    </div>
  );
}

export default App;
