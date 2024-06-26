import React, { useState } from "react";
import { Box, Heading, Input, List, ListItem, VStack, HStack, IconButton, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const addTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No content",
        description: "Todo can't be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <VStack p={8} bg="gray.100" style={{ backgroundSize: "100px 100px", backgroundImage: "repeating-linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%, #f5f5f5), repeating-linear-gradient(45deg, #f5f5f5 25%, #eaeaea 25%, #eaeaea 75%, #f5f5f5 75%, #f5f5f5)" }}>
      <Heading mb="8">My Application</Heading>
      <HStack>
        <Input value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Add a new task..." />
        <IconButton icon={<FaPlus />} onClick={addTodo} colorScheme="red" aria-label="Add todo" />
      </HStack>
      <List spacing={3} my={5} w="100%">
        {todos.map((todo, index) => {
          const listItemVariants = {
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
          };
          return (
            <motion.div key={index} initial="hidden" animate="visible" exit="exit" variants={listItemVariants} layout>
              <ListItem p={2} bg="gray.100" borderRadius="md">
                <HStack justify="space-between">
                  <Box>{todo}</Box>
                  <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
                </HStack>
              </ListItem>
            </motion.div>
          );
        })}
      </List>
      <Footer />
    </VStack>
  );
};

export default Index;
