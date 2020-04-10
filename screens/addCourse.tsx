import React, { useState } from "react";
import { TextInput, Switch, StyleSheet, Text, View } from "react-native";

const AddCourse = () => {
  const [onCourse, setOnCourse] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View>
      <Text>Name</Text>
      <TextInput />
      <Text>Are you currently at the course?</Text>
      <Switch
        value={onCourse}
        onValueChange={(v) => {
          setModalOpen(true);
          setOnCourse(v);
        }}
      />
    </View>
  );
};

export default AddCourse;

const styles = StyleSheet.create({});
