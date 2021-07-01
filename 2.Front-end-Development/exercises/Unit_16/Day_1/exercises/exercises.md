# Front-end Development Libraries - Redux - freeCodeCamp

## Define an Action Creator

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/define-an-action-creator)

### My solution

```

const action =  {
	type:  'LOGIN'
}

// Define an action creator here:

const actionCreator =  (action)  => action;

```

## Dispatch an Action Event

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/dispatch-an-action-event)

### My solution

```

const store =  Redux.createStore(
	(state =  {login:  false})  => state
);

const loginAction =  ()  =>  {
	return  {
		type:  'LOGIN'
	}
};

// Dispatch the action here:

store.dispatch(loginAction());

```

## Handle an Action in the Store

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/handle-an-action-in-the-store)

### My solution

```

const defaultState =  {
	login:  false
};

const reducer =  (state = defaultState, action)  =>  {
	// Change code below this line

	switch(action.type)  {
	case  'LOGIN':
		return  { login:  true  };
	default:
		return state;
	}

	// Change code above this line
};

const store =  Redux.createStore(reducer);

const loginAction =  ()  =>  {
	return  {
		type:  'LOGIN'
	}
};

```

## Handle an Action in the Store

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/handle-an-action-in-the-store)

### My solution

```

const defaultState =  {
	login:  false
};

const reducer =  (state = defaultState, action)  =>  {
	// Change code below this line

	switch(action.type)  {
	case  'LOGIN':
		return  { login:  true  };
	default:
		return state;
	}

	// Change code above this line
};

const store =  Redux.createStore(reducer);

const loginAction =  ()  =>  {
	return  {
		type:  'LOGIN'
	}
};

```

## Use a Switch Statement to Handle Multiple Actions

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-a-switch-statement-to-handle-multiple-actions)

### My solution

```

const defaultState =  {
	authenticated:  false
};

const authReducer =  (state = defaultState, action)  =>  {
	// Change code below this line

	switch(action.type)  {
	case  'LOGIN':
		return  { authenticated:  true  };
	case  'LOGOUT':
		return  { authenticated:  false  };
	default:
		return state;
	}

	// Change code above this line
};

const store =  Redux.createStore(authReducer);

const loginUser =  ()  =>  {
	return  {
		type:  'LOGIN'
	}
};

const logoutUser =  ()  =>  {
	return  {
		type:  'LOGOUT'
	}
};

```

## Use const for Action Types

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-const-for-action-types)

### My solution

```

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

```

## Register a Store Listener

[Link to freeCodeCamp exercise.](https://www.freecodecamp.org/learn/front-end-libraries/redux/register-a-store-listener)

### My solution

```

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
  case ADD:
    return state + 1;
  default:
    return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line

store.subscribe(() => count += 1)

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

```
