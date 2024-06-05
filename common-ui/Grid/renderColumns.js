const defaultColums = {
  small: 4,  // of 4
  medium: 8, // of 8
  large: 8,  // of 12
  max: 3     // of 12
}




export const renderColumns = (col) => {
  switch(col) {
    case 1: 
      return 1;
    case 2: 
      return 2;
    case 3: 
      return 3;
    case 4: 
      return 4;
    case 5: 
      return 5;
    case 6: 
      return 6;
    case 7: 
      return 7;
    case 8: 
      return 8;
    case 9: 
      return 9;
    case 10: 
      return 10;
    case 11: 
      return 11;
    case 12: 
      return 12;
      
    default: 
      return defaultColums.large;
  }
}

export const renderLargeColumns = (col) => {
  switch(col) {
    case 1: 
      return 1;
    case 2: 
      return 2;
    case 3: 
      return 3;
    case 4: 
      return 4;
    case 5: 
      return 5;
    case 6: 
      return 6;
    case 7: 
      return 7;
    case 8: 
      return 8;
    case 9: 
      return 9;
    case 10: 
      return 10;
    case 11: 
      return 11;
    case 12: 
      return 12;
      
    default: 
      return defaultColums.large;
  }
}

export const renderMediumColumns = (colMd) => {
  switch(colMd) {
    case 1: 
      return 1;
    case 2: 
      return 2;
    case 3: 
      return 3;
    case 4: 
      return 4;
    case 5: 
      return 5;
    case 6: 
      return 6;
    case 7: 
      return 7;
    case 8: 
      return 8;
      
    default: 
      return defaultColums.medium;
  }
}

export const renderSmallColumns = (colSm) => {
  switch(colSm) {
    case 1: 
      return 1;
    case 2: 
      return 2;
    case 3: 
      return 3;
    case 4: 
      return 4;
      
    default: 
      return defaultColums.small;
  }
}