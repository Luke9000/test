import React from 'react';
import TestPage from '../pages/testPage/testPage';


interface FormData {
  field1: string;
}

const App: React.FC = () => {
  const handleFormSubmit = (formData: FormData) => {
    console.log('Отправляем данные:', formData);
    // Здесь можно организовать отправку данных
  };


  return (
    <>
      <TestPage></TestPage>
      {/* <div>
        <h1>123</h1>
          <Form  onFormSubmit={handleFormSubmit} />
      </div> */}
    </>
  );
};

export default App;
