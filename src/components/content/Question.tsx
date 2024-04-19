"use client";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

export function Question({
  id,
  type = "short-answer",
  title,
  question,
  options = null,
  randomizeOptions = false,
  answer,
  feedback,
}: {
  id: string;
  type: "short-answer" | "one-choice" | "multiple-choise" | "true-false";
  title: string;
  question: string;
  options?: string[] | null;
  randomizeOptions?: boolean;
  answer: string | string[] | boolean;
  feedback: string;
}) {
  const nodeRef = useRef(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [orderedOptions, setOrderedOptions] = useState<string[] | null>(options);

  const checkAnswer = () => {
    setIsAnswerCorrect(userAnswer === answer);
    setAnswerChecked(true);
    setShowFeedback(true);

    localStorage.setItem(id, JSON.stringify(userAnswer));
  };

  const restartQuestion = () => {
    localStorage.removeItem(id);
    setShowFeedback(false);
    setTimeout(() => {
      setUserAnswer("");
      setIsAnswerCorrect(false);
      setAnswerChecked(false);
    }, 500);
  };

  useEffect(() => {
    if (options && randomizeOptions) {
      const shuffledOptions = options?.sort(() => Math.random() - 0.5);
      if (shuffledOptions) {
        setOrderedOptions(shuffledOptions);
      }
    }

    const storedQuestion = localStorage.getItem(id);
    if (storedQuestion) {
      const userAnswer = JSON.parse(storedQuestion);
      setUserAnswer(userAnswer);
      setIsAnswerCorrect(userAnswer === answer);
      setAnswerChecked(true);
      setShowFeedback(true);
    }
  }, [id, options, randomizeOptions, answer]);

  return (
    <div className="relative my-8 p-6 flex flex-col max-w-xl mx-auto items-center border rounded-lg border-slate-300 dark:border-slate-700">
      <h3 className="text-lg sm:text-xl font-extrabold tracking-tight mb-2">
        {title}
      </h3>
      <p>{question}</p>

      <button
        className="absolute top-2 right-2 p-1.5 bg-slate-600 dark:bg-slate-500 text-xs lg:text-sm text-white rounded-lg"
        title="Reiniciar pregunta"
        onClick={restartQuestion}
        hidden={!answerChecked}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-rotate"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
        </svg>
      </button>

      <form
        className={`w-full flex justify-center items-center mt-4 text-base lg:text-lg ${
          type === "one-choice" ? "flex-col" : "flex-col md:flex-row"
        }`}
        onSubmit={(e) => e.preventDefault()}
      >
        {type === "short-answer" && (
          <input
            type="text"
            className="px-2 py-1 mb-2 md:mb-0 border rounded-lg border-slate-300 dark:border-slate-700 disabled:opacity-60 disabled:cursor-not-allowed"
            placeholder="Respuesta"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={answerChecked}
          />
        )}

        {type === "one-choice" && (
          <ul className="w-full flex flex-row flex-wrap justify-center mb-3">
            {orderedOptions?.map((option, index) => (
              <li key={index} className="flex basis-full md:basis-1/2 p-2">
                <input
                  type="radio"
                  id={index.toString()}
                  name={id}
                  value={option}
                  checked={userAnswer === option}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={answerChecked}
                  className="hidden peer"
                />
                <label
                  htmlFor={index.toString()}
                  className="flex items-center justify-center text-center w-full p-4 border rounded-lg border-slate-300 dark:border-slate-700 hover:scale-[1.05] transition-all peer-checked:shadow-md peer-checked:border-slate-500 peer-checked:dark:border-slate-300 cursor-pointer peer-disabled:opacity-60 peer-disabled:cursor-not-allowed peer-disabled:hover:scale-100 peer-disabled:hover:shadow-none"
                >
                  {option}
                </label>
              </li>
            ))}
          </ul>
        )}
        <button
          className="ml-2 px-4 py-1 bg-sky-600 dark:bg-sky-500 text-white rounded-lg disabled:cursor-not-allowed disabled:opacity-60"
          onClick={checkAnswer}
          disabled={userAnswer === "" || answerChecked}
        >
          Comprobar
        </button>
      </form>

      <CSSTransition
        classNames="question-feedback"
        in={showFeedback}
        timeout={500}
        unmountOnExit
      >
        <div ref={nodeRef} className="pt-2">
          <p
            className={`${
              isAnswerCorrect ? "text-green-500" : "text-red-500"
            } text-center font-semibold`}
          >
            {isAnswerCorrect ? "¡Correcto!" : "¡Incorrecto!"}
          </p>
          <p className="mt-1">
            <strong>Respuesta:</strong> {feedback}
          </p>
        </div>
      </CSSTransition>
    </div>
  );
}
