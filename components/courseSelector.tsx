import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import {
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from "react-native-gesture-handler";
import { GameContext } from "../stateHandling/Context";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";

const tempCourses = [
  {
    id: "abc123",
    name: "Another Golf Course, not too far away",
    numberOfHoles: 18,
  },
  {
    id: "def456",
    name: "Yet another course, even further away",
    numberOfHoles: 9,
  },
];
const CourseSelector = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { state, dispatch } = useContext(GameContext);
  console.log("state", state);
  return (
    <View>
      <Modal transparent={true} visible={modalVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(255,255,255,0.90)",
            justifyContent: "flex-start",
          }}
        >
          <SafeAreaView
            style={{
              marginLeft: 30,
              marginRight: 30,
              marginTop: Constants.statusBarHeight,
            }}
          >
            <View style={{}}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{ alignSelf: "flex-end" }}
              >
                <Text>close X</Text>
              </TouchableOpacity>
              <Text style={{ textAlign: "center" }}>Closest Courses</Text>
              <ScrollView>
                {[
                  ...tempCourses,
                  ...tempCourses,
                  ...tempCourses,
                  ...tempCourses,
                ].map((v) => (
                  <TouchableHighlight
                    onPress={() => {
                      console.log("v.name", v.name);
                      dispatch({
                        type: "choose_course",
                        courseId: v.id,
                        courseName: v.name,
                        numberOfHoles: v.numberOfHoles,
                      });
                      setModalVisible(false);
                    }}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.5)",
                      marginBottom: 20,
                    }}
                  >
                    <Text key={v.id}>
                      {v.name} ({v.numberOfHoles} holes)
                    </Text>
                  </TouchableHighlight>
                ))}
              </ScrollView>
            </View>
          </SafeAreaView>
        </View>
      </Modal>
      <Text>Selected Course</Text>
      <Text>
        {state.courseName} ({state.numberOfHoles} holes)
      </Text>
      <Button
        title="+ Choose Other Course"
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default CourseSelector;

const styles = StyleSheet.create({});
