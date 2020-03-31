export function reducer(state, action) {
  switch (action.type) {
    case "start_game":
      const holes = new Array(action.numberOfHoles).fill({}).map((v, i) => ({
        holeNo: i + 1,
        par: 4,
        strokeIndex: 5,
        score: 0
      }));
      return {
        ...state,
        numberOfHoles: action.numberOfHoles,
        currentHole: 1,
        holes: holes
      };
    case "set_hole_score":
      return {
        ...state,
        holes: state.holes.map(hole =>
          hole.holeNo === action.holeNo
            ? { ...hole, score: action.score && parseInt(action.score) }
            : hole
        )
      };
    case "increment_hole_score":
      return {
        ...state,
        holes: state.holes.map(hole =>
          hole.holeNo === action.holeNo
            ? {
                ...hole,
                score:
                  parseInt(hole.score) === NaN ? 1 : parseInt(hole.score) + 1
              }
            : hole
        ),
        currentHole: action.holeNo
      };
    case "set_focus":
      return {
        ...state,
        currentHole: action.holeNo
      };
  }
}
