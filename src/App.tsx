import { useState } from "react";
import Modal from "react-modal";
import { Deshbord } from "./components/Deshbord";
import { Header } from "./components/Header";
import { NewTrasectionModal } from "./components/NewTransectionModal";

import { GlobalStyle } from "./style/global";
import { TransectionContext, TransectionsProvider } from "./Hooks/useTransections";

Modal.setAppElement('#root')

export function App() { 

  // State Modal
  const [isNewTransectionModalOpen, setIsNewTrasectionModalOpen] = useState(false)

  // Open Modal
  function handleOpenNewTransactionModal() {
      setIsNewTrasectionModalOpen(true)
  }

  // Close Modal
  function handleCloseNewTransactionModal() {
      setIsNewTrasectionModalOpen(false)
  }

  return (
    <TransectionsProvider>
      <Header 
        onOpenNewTransectionModal={handleOpenNewTransactionModal}
      />
      <Deshbord />
      <NewTrasectionModal 
        isOpen={isNewTransectionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
      <GlobalStyle />
    </TransectionsProvider>
  );
}


