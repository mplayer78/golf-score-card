export function reducer(state, action) {
  switch (action.type) {
    case "start_game":
      const holes = new Array(action.numberOfHoles).fill({}).map((v, i) => ({
        holeNo: i + 1,
        par: 4,
        strokeIndex: 5,
        score: 0,
      }));
      return {
        ...state,
        numberOfHoles: action.numberOfHoles,
        currentHole: 1,
        holes: holes,
      };
    case "set_hole_score":
      return {
        ...state,
        holes: state.holes.map((hole) =>
          hole.holeNo === action.holeNo
            ? { ...hole, score: action.score && parseInt(action.score) }
            : hole
        ),
      };
    case "increment_hole_score":
      return {
        ...state,
        holes: state.holes.map((hole) =>
          hole.holeNo === action.holeNo
            ? {
                ...hole,
                score:
                  parseInt(hole.score) === NaN ? 1 : parseInt(hole.score) + 1,
              }
            : hole
        ),
        currentHole: action.holeNo,
      };
    case "set_focus":
      return {
        ...state,
        currentHole: action.holeNo,
      };
    case "finish_game":
      const totalScore = state.holes.reduce((a, v) => a + v.score, 0);

      return {
        ...state,
        totalScore,
      };
    case "get_history":
      return {
        ...state,
        history: action.data,
      };
    case "choose_course":
      console.log("action.courseId", action.courseId);
      return {
        ...state,
        courseId: action.courseId,
        courseName: action.courseName,
        numberOfHoles: action.numberOfHoles,
      };
    case "no_user":
      return state;
    default:
      console.log("action", action);
      return state;
  }
}
