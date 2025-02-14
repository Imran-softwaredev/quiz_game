import React from "react";
import { motion } from "framer-motion";
import { ShowWrongIcon, ShowCorrectIcon } from "@/icons";
import { decodeHtmlEntities } from "@/utils/common.utils";
import { PAGE_VARIANTS } from "@/constants/pageVariant.constants";
import Card from "@components/Card";
import Container from "@components/Container";
import Text from "@components/Text";
import Button from "@components/Button";
import List from "@components/List";
import useResults from "@/hooks/useResules";

const Result: React.FC = () => {
  const { onClickPlayAgain, obtainedScore, state, total, isCorrect } =
    useResults();

  return (
    <Container className="bg-gray-100 min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={PAGE_VARIANTS}
        className="w-full flex items-center justify-center"
      >
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
          <Card className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 max-h-[90vh] flex flex-col">
            <div className="mb-6 text-center">
              <Text
                variant="h1"
                weight="bold"
                align="center"
                className="text-gray-800"
              >
                You scored
              </Text>
              <Text
                variant="h2"
                weight="bold"
                align="center"
                className="text-blue-600"
              >
                {`${obtainedScore} / ${total}`}
              </Text>
            </div>
            <div className="flex-1 border overflow-y-auto pt-4 pb-4 rounded-md min-h-[50vh]">
              <List
                items={state.answers.map((item: any, index: number) => ({
                  key: index,
                  icon: isCorrect(item) ? (
                    <ShowCorrectIcon />
                  ) : (
                    <ShowWrongIcon />
                  ),
                  content: (
                    <Text
                      variant="medium"
                      weight="medium"
                      className="text-base"
                    >
                      {decodeHtmlEntities(item.question)}
                    </Text>
                  ),
                }))}
                className="space-y-4"
              />
            </div>

            <Button
              onClick={onClickPlayAgain}
              label="PLAY AGAIN ?"
              variant="primary"
              className="mt-6 w-full md:w-auto px-6 py-3 text-lg"
            />
          </Card>
        </div>
      </motion.div>
    </Container>
  );
};

export default Result;
