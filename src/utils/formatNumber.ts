const formatNumber = (number: any): string => {
    switch (typeof number) {
      case "number":
      case "string": {
        number = Number(number);
        return Number.isFinite(number)
          ? number.toLocaleString(undefined, { maximumFractionDigits: 2 })
          : "-";
      }
    }
    return "-";
  };
  
  export default formatNumber;
  