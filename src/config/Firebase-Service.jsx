import React, {useMemo} from 'react'
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { AuthProvider, FirestoreProvider, StorageProvider, useFirebaseApp } from "reactfire"

const FirebaseService = ({children}) => {
     const App = useFirebaseApp()
     const auth= getAuth(App)
     const firestore = getFirestore(App)
     const storage = getStorage(App)
  return (
   
  <div>
   <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <StorageProvider sdk={storage}>
          { children }
        </StorageProvider>
      </FirestoreProvider>
    </AuthProvider>  
  </div>
  )
}

export default FirebaseService
