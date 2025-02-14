import React from "react";
import { motion } from "framer-motion";
import { PAGE_VARIANTS } from "@/constants/pageVariant.constants";
import Card from "@components/Card";
import Loading from "@components/Loading";
import Container from "@components/Container";
import RadioButtons from "@components/RadioButtons";
import Text from "@components/Text";
import Button from "@components/Button";
import useQuiz from "@/hooks/useQuiz";

const Quiz: React.FC = () => {
  const {
    handleNextClick,
    handleBackClick,
    handleAnswerChange,
    answerState,
    id,
    state,
    quiz,
    questionId,
  } = useQuiz();

  if (!id || !quiz) {
    return <Loading />;
  }

  return (
    <Container className="bg-gray-100">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={PAGE_VARIANTS}
        className="w-full flex items-center justify-center"
      >
        <Card className="max-h-[100vh] w-full md:w-3/4 p-8 flex flex-col">
          <Text
            variant="h1"
            weight="bold"
            align="center"
            className="mb-4 flex-shrink-0"
          >
            <span dangerouslySetInnerHTML={{ __html: quiz.category }} />
          </Text>

          <div className="border pt-10 pb-10 p-6 border-gray-400 bg-gray-100 text-center rounded-md w-[80%] mb-6">
            <Text variant="h3" weight="medium" align="center">
              <span dangerouslySetInnerHTML={{ __html: quiz.question }} />
            </Text>
          </div>

          <div className="mt-4 w-full">
            <RadioButtons
              items={[
                {
                  id: 1,
                  value: "True",
                  label: "True",
                  onChange: handleAnswerChange,
                },
                {
                  id: 2,
                  value: "False",
                  label: "False",
                  onChange: handleAnswerChange,
                },
              ]}
              selectedValue={answerState ? answerState : ""}
            />
          </div>

          <div className="w-full flex flex-col gap-6 md:flex-row justify-center mt-6">
            <Button
              onClick={handleBackClick}
              label="Back"
              variant="secondary"
              disabled={questionId === 1}
              className="w-[30%] md:w-1/2"
            />
            <Button
              onClick={handleNextClick}
              label="Next"
              variant="primary"
              disabled={!answerState}
              className="w-[30%] md:w-1/2"
            />
          </div>

          <div className="flex-shrink-0 mt-4">
            <Text variant="h4" weight="medium" align="center" className="mt-2">
              {id} of {state.total}
            </Text>
          </div>
        </Card>
      </motion.div>
    </Container>
  );
};

export default Quiz;
