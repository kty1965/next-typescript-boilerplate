import React from 'react';

interface IProps {
  test?: String
}


const MyComponent: React.FC<IProps> = (props: IProps) => {
  const [count, setCount] = React.useState(0);
  console.log(props);
  return (
    <div
      role="presentation"
      onClick={() => setCount(count + 1)}
    >
      {count}
    </div>
  );
};

export default MyComponent;
