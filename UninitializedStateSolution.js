import React, { useState, useEffect } from 'react';

const UninitializedStateSolution = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
      setData({ message: 'Data loaded successfully!' });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data.message}</Text>
    </View>
  );
};

export default UninitializedStateSolution; 