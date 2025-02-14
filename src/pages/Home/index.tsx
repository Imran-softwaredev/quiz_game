import React from "react";
import { motion } from "framer-motion";
import { PAGE_VARIANTS } from "@/constants/pageVariant.constants";
import Button from "@/components/Button";
import Card from "@components/Card";
import Container from "@components/Container";
import Text from "@components/Text";
import useStartQuiz from "@/hooks/useStartQuiz";

const Home: React.FC = () => {
  const { loading, onClickBegin } = useStartQuiz();

  return (
    <Container className="bg-gray-100">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={PAGE_VARIANTS}
        className="w-full flex items-center justify-center"
      >
        <Card className="flex flex-col justify-between min-h-screen md:min-h-[80vh]">
          <Text variant="h1" weight="bold" align="center" className="mb-8">
            Welcome to the <br /> Trivia Challenge!
          </Text>

          <Text variant="h3" weight="medium" align="center" className="mb-6">
            You will be presented <br /> with 10 True or False <br /> questions.
          </Text>

          <Text variant="h3" weight="medium" align="center" className="mb-12">
            Can you score 100%?
          </Text>

          <Button
            onClick={onClickBegin}
            variant="secondary"
            loading={loading}
            label="BEGIN"
            className="text-lg max-w-[50%] text-gray-600 font-semibold tracking-wide mx-auto"
          />
        </Card>
      </motion.div>
    </Container>
  );
};

export default Home;
