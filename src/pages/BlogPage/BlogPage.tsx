import { useTranslation } from 'react-i18next';
import { IoMdArrowBack } from 'react-icons/io';
import { Route, Routes, useNavigate } from 'react-router-dom';

import useLocale from 'translations/hooks';

import * as S from './BlogPage.styles';
import { SinglePost } from './components/SinglePost';
import { postTitleType, postsList } from './postsList';

export const BlogPage = () => {
  const locale = useLocale();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Routes>
      <Route path=":postId" element={<SinglePost />} />

      <Route
        index
        element={
          <S.Content>
            <S.TopLineContent>
              <S.BackButton onClick={() => navigate('/')}>
                <IoMdArrowBack /> {t('community.backButton')}
              </S.BackButton>
            </S.TopLineContent>
            {(Object.keys(postsList) as postTitleType[]).map((key) => (
              <S.PostLinkContent onClick={() => navigate(`/blog/${key}`)} key={key}>
                <S.PostDate>
                  {postsList[key].date.toLocaleDateString(locale.locale, { dateStyle: 'short' })}
                </S.PostDate>
                <S.PostLink>{postsList[key].postName}</S.PostLink>
              </S.PostLinkContent>
            ))}
          </S.Content>
        }
      />
    </Routes>
  );
};
