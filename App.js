// import React, { useState } from 'react';
// import SurveyForm from './components/SurveyForm';
// import SurveyList from './components/SurveyList';
// import LoginForm from './components/LoginForm';

// const App = () => {
//   const [surveys, setSurveys] = useState([]);
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleSurveySubmit = (formData) => {
    
//     setSurveys([...surveys, formData]);
//   };

//   const handleLogin = (credentials) => {
   
//   };

//   return (
//     <div>
//       {!loggedIn ? (
//         <LoginForm onLogin={handleLogin} />
//       ) : (
//         <div>
//           <SurveyForm onSubmit={handleSurveySubmit} />
//           <SurveyList surveys={surveys} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SurveyForm from './components/SurveyForm';
import SurveyList from './components/SurveyList';

const App = () => {
  const [surveys, setSurveys] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSurveySubmit = (formData) => {
    setSurveys([...surveys, formData]);
  };

  const handleLogin = (credentials) => {
    const adminUsername = 'admin';
    const adminPassword = 'admin';
    const { username, password } = credentials;

    if (username === adminUsername && password === adminPassword) {
      setLoggedIn(true);
    }else {
      console.error('Login failed: Invalid credentials');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <SurveyForm onSubmit={handleSurveySubmit} />
          <SurveyList surveys={surveys} />
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;


