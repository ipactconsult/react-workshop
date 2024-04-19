import  { useState } from "react";
const ErrorProneComponent = ({tag}) => {
  const [error] = useState(true);
  if (!error) {
    return (
      <div>
        <p>Une erreur est survenue dans 
          le composant.</p>
        <p>Vérifiez le composant pour 
          trouver et corriger les erreurs.</p>
      </div>
    );
  } else {
    console.log("Aucune erreur dans le composant.");
    return <div>Le composant fonctionne 
      correctement. {tag}</div>;
  }
};
export default ErrorProneComponent;



