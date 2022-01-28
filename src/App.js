import {Routes, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import {
    HomePage,
    UsersPage,
    UserDetailsPage,
    UserPostsPage,
    PostsPage,
    PostDetailsPage,
    PostCommentsPage,
    AlbumsPage,
    PhotosPage
} from './pages';


function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>

                    <Route index element={<HomePage/>}/>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={':posts'} element={<UserPostsPage/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={':comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>

                </Route>


            </Routes>
        </div>
    )
}

export default App;
