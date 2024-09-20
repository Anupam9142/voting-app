import React from 'react';
//import firebase from 'context/firebase';
import { PageLayout, LoginPage} from 'components/common';

const AdminPage = () => {
    return (
        <PageLayout>
            <LoginPage modalType='admin'/>
        </PageLayout>
    )
}

export { AdminPage };