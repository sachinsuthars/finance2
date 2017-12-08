const initialState = {
    initial : 'Main',
    role : 'generic',
    amounts : [],
    value: 4,
    prefix: 'Help provide ',
    suffix: 'meals',
    transaction: '',
    frequency: 'single',
    donationType: 'array',
    transactionSymbol: '',
    repeatUser: false,
    repeatDonor: false,
    responseObject: ''

};

const reducer = (state = initialState, action) => {

  switch (action.type) {

      case "ChangeInitial":
          state = {
              ...state,
              initial : action.payload,
          };
          break;

        case "ChangeRole":
            state = {
                ...state,
                role : action.payload,
            };
            break;
        
        case "ChangeAmounts":
            state = {
                ...state,
                amounts : action.payload,
            };
            break;
            
        case "ChangeValue":
            state = {
                ...state,
                value : action.payload,
            };
            break;
            
        case "ChangeTransaction":
            state = {
                ...state,
                transaction : action.payload,
            };
            break;
            
        case "ChangeFrequency":
            state = {
                ...state,
                frequency : action.payload,
            };
            break;
            
        case "ChangePrefix":
            state = {
                ...state,
                prefix : action.payload,
            };
            break;
            
        case "ChangeSuffix":
            state = {
                ...state,
                suffix : action.payload,
            };
            break;
            
        case "ChangeType":
            state = {
                ...state,
                donationType : action.payload,
            };
            break;
            
        case "ChangeSymbol":
            state = {
                ...state,
                transactionSymbol : action.payload,
            };
            break;
            
        case "ChangeRepeat":
            state = {
                ...state,
                repeatUser : action.payload,
            };
            break;
        
        case "ChangeRepeatDonor":
            state = {
                ...state,
                repeatDonor : action.payload,
            };
            break;
            
        case "UpdateResponseObject":
            state = {
                ...state,
                responseObject : action.payload,
            };
            break;
  }
  return state;

};


export default reducer;