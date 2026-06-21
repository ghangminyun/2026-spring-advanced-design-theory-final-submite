# 2026년 1학기 설계특론 과제 제출 안내

이 저장소는 **2026년 1학기 설계특론 과제 제출용 저장소**입니다.

학생들은 GitHub 방식으로 과제를 제출합니다.

제출 순서는 다음과 같습니다.

1. 이 저장소를 본인 GitHub 계정으로 Fork합니다.
2. 본인 이름과 프로젝트명으로 제출 폴더를 만듭니다.
3. 과제 파일을 본인 폴더 안에 넣습니다.
4. 변경 내용을 commit하고 push합니다.
5. 원본 저장소로 Pull Request를 보냅니다.

## 제출 저장소 주소

아래 저장소로 제출합니다.

```text
https://github.com/philipdekim-OnD01/2026-spring-advanced-design-theory-final-submite
```

## 제출 전에 준비할 것

다음이 필요합니다.

- GitHub 계정
- Git 또는 GitHub Desktop
- 제출할 과제 파일

Git 명령어 사용이 어렵다면 GitHub Desktop을 사용해도 됩니다.

## 제출 폴더 이름 규칙

반드시 본인 폴더를 하나 만들고, 그 안에 과제를 넣어 주세요.

폴더 이름은 아래 형식을 사용합니다.

```text
이름.최종과제.프로젝트명
```

교수자 예시 자료는 `00`번으로 이미 올라와 있습니다. 학생은 `00`, `01`, `02` 같은 번호를 직접 붙이지 마세요.

```text
00.김임환교수.최종과제.SSD.on.RSP.Project
```

학생 제출 폴더 예시는 다음과 같습니다.

```text
홍길동.최종과제.My.Project
김철수.최종과제.Raspberry.Pi.Project
```

주의사항:
- 폴더 이름에 공백을 넣지 않습니다.
- 프로젝트명에는 공백 대신 `.`을 사용합니다.
- 다른 학생의 폴더를 수정하거나 삭제하지 않습니다.

## 권장 제출 구조

예시는 다음과 같습니다.

```text
.
|-- 00.김임환교수.최종과제.SSD.on.RSP.Project/
|   |-- README.md
|   |-- project-page/
|   `-- RSP_SSD_LAB/
|-- 홍길동.최종과제.My.Project/
|   |-- README.md
|   |-- report.pdf
|   |-- source/
|   `-- figures/
`-- README.md
```

## 제출 방법

### 1. 저장소 Fork하기

1. 제출 저장소에 접속합니다.
2. 오른쪽 위의 **Fork** 버튼을 누릅니다.
3. 본인 GitHub 계정 아래에 fork를 만듭니다.

Fork가 끝나면 본인 계정에 제출 저장소의 복사본이 생깁니다.

주의할 점:

- Fork는 원본 저장소의 현재 `main` 내용을 복사합니다.
- 교수자 예시 자료인 `00.김임환교수.최종과제.SSD.on.RSP.Project` 폴더는 함께 복사됩니다.
- 학생 제출 Pull Request는 마감 전까지 원본 저장소에 merge하지 않습니다.
- 따라서 정상 운영 중에는 다른 학생의 제출 폴더가 본인 fork에 함께 들어오지 않습니다.
- 만약 다른 학생 폴더가 보이더라도 수정하거나 삭제하지 말고, 본인 제출 폴더만 추가하세요.

### 2. 본인 Fork를 컴퓨터로 받기

본인 fork 저장소에서 초록색 **Code** 버튼을 누르고 HTTPS 주소를 복사합니다.

터미널에서 아래 명령을 실행합니다.

```bash
git clone 본인_FORK_주소
cd 본인_FORK_폴더
```

예시:

```bash
git clone https://github.com/본인아이디/2026-spring-advanced-design-theory-final-submite.git
cd 2026-spring-advanced-design-theory-final-submite
```

### 3. 본인 폴더 만들기

아래 예시처럼 본인 이름과 프로젝트명을 사용해 폴더를 만듭니다.

```bash
mkdir 홍길동.최종과제.My.Project
```

`홍길동.최종과제.My.Project` 부분은 반드시 본인의 이름과 프로젝트명으로 바꾸세요.

### 4. 과제 파일 넣기

과제 파일을 본인 폴더 안에 넣습니다.

예시:

```text
홍길동.최종과제.My.Project/report.pdf
홍길동.최종과제.My.Project/source/main.py
홍길동.최종과제.My.Project/figures/result.png
```

다른 학생의 폴더는 수정하지 마세요.

### 5. 변경 내용 저장하기

터미널에서 아래 명령을 실행합니다.

```bash
git status
git add .
git commit -m "Submit final project - 이름"
```

예시:

```bash
git commit -m "Submit final project - 홍길동"
```

### 6. 본인 Fork로 올리기

아래 명령을 실행합니다.

```bash
git push
```

로그인이 필요하다는 안내가 나오면 GitHub 안내에 따라 로그인합니다.

### 7. Pull Request 만들기

1. GitHub에서 본인 fork 저장소로 이동합니다.
2. **Contribute** 버튼을 누릅니다.
3. **Open pull request**를 누릅니다.
4. base repository가 아래 저장소인지 확인합니다.

   ```text
   philipdekim-OnD01/2026-spring-advanced-design-theory-final-submite
   ```

5. Pull Request 제목은 아래 형식으로 작성합니다.

   ```text
   [최종과제 제출] 이름
   ```

   예시:

   ```text
   [최종과제 제출] 홍길동
   ```

6. **Create pull request**를 누릅니다.

Pull Request가 만들어지면 제출이 완료된 것입니다.

학생이 본인 fork에 push하거나 Pull Request를 만들어도, 원본 저장소의 `main`에는 바로 들어가지 않습니다. 교수자가 **Merge pull request**를 눌러야만 원본 `main`에 반영됩니다.

## 제출 후 수정하고 싶을 때

마감 전이라면 수정할 수 있습니다.

파일을 고친 뒤 아래 명령을 실행합니다.

```bash
git add .
git commit -m "Update assignment submission"
git push
```

이미 만든 Pull Request는 자동으로 업데이트됩니다. 새 Pull Request를 다시 만들 필요가 없습니다.

## 제출 규칙

- Pull Request로만 제출합니다.
- 과제 파일은 반드시 본인 폴더 안에 넣습니다.
- 다른 학생의 폴더나 파일을 수정하지 않습니다.
- 다른 학생의 과제를 제출하지 않습니다.
- `.DS_Store`, `.ipynb_checkpoints`, 임시 파일, 과제와 무관한 큰 데이터 파일은 넣지 않습니다.
- 50MB 이상의 큰 파일은 저장소에 직접 올리지 말고, 아래의 "큰 파일 제출 방법"을 따릅니다.
- 제출 시간은 Pull Request 생성 시간과 commit 기록을 기준으로 확인할 수 있습니다.

## 제출물 Merge 운영 방식

학생들이 fork할 때는 그 시점의 원본 저장소 내용이 복사됩니다. 따라서 다른 학생의 제출물이 원본 저장소에 merge되어 있으면, 나중에 fork하는 학생은 그 제출물까지 함께 복사하게 됩니다.
이를 방지하기 위해 이 과제 저장소는 다음 방식으로 운영합니다.

- 학생은 본인 fork에 push한 뒤 원본 저장소로 Pull Request를 만듭니다.
- 학생은 Pull Request를 만들면 제출이 완료됩니다.
- 학생이 push하거나 Pull Request를 만들어도 원본 저장소의 `main`에는 바로 들어가지 않습니다.
- 교수자가 **Merge pull request**를 눌러야 원본 `main`에 반영됩니다.
- 교수자는 마감 전까지 학생 Pull Request를 merge하지 않습니다.
- 제출물은 원본 저장소의 **Pull requests** 탭에서 개별적으로 확인합니다.
- 마감 후 필요할 때만 merge하거나, merge하지 않고 Pull Request 상태 그대로 채점할 수 있습니다.

따라서 학생은 다른 학생의 제출물이 포함되지 않은 기본 저장소를 fork해서 과제를 제출하면 됩니다.

## 큰 파일 제출 방법

GitHub 일반 저장소에는 큰 파일을 직접 올리지 않는 것이 좋습니다.

- 50MB 이상 파일: GitHub에서 경고가 발생할 수 있습니다.
- 100MB 이상 파일: 일반 Git push가 차단됩니다.
- 예: 큰 모델 파일, 데이터셋, 영상 파일, ZIP 압축 파일

50MB 이상의 파일은 다음 방법 중 하나로 제출하세요.

1. Google Drive 또는 OneDrive에 업로드합니다.
2. 공유 권한을 "링크가 있는 사람은 보기 가능"으로 설정합니다.
3. 본인 제출 폴더 안에 `README.md`를 만들고 다운로드 링크를 적습니다.

예시:

```text
홍길동.최종과제.My.Project/
|-- README.md
|-- report.pdf
`-- source/
```

`README.md` 예시:

```text
# 홍길동 최종과제

## 큰 파일 다운로드

- Dataset: https://drive.google.com/...
- Demo video: https://drive.google.com/...
- Model file: https://drive.google.com/...
```

GitHub Releases를 사용할 수 있는 학생은 Releases에 큰 파일을 첨부하고, 본인 `README.md`에 Release 다운로드 링크를 적어도 됩니다.

## 제출 확인 방법

Pull Request를 만든 뒤 다음을 확인하세요.

- 원본 저장소의 **Pull requests** 탭에 본인의 Pull Request가 보이는지 확인합니다.
- Pull Request 파일 목록에 본인 폴더가 보이는지 확인합니다.
- 최종 과제 파일이 모두 포함되어 있는지 확인합니다.
- Pull Request 제목이 `[최종과제 제출] 이름` 형식인지 확인합니다.
- Pull Request가 아직 merge되지 않았더라도 정상 제출입니다.
- 마감 전 수정이 필요하면 본인 fork에 다시 push하세요. 기존 Pull Request가 자동으로 업데이트됩니다.

## 자주 발생하는 문제

### Fork를 했는데 저장소를 못 찾겠습니다.

본인 GitHub 프로필로 이동한 뒤 **Repositories** 탭을 확인하세요. Fork한 저장소가 보여야 합니다.

### push가 안 됩니다.

원본 저장소가 아니라 본인 fork를 clone했는지 확인하세요. 학생은 원본 저장소에 직접 push할 권한이 없습니다.

### Pull Request를 만든 뒤 파일을 잘못 올린 것을 발견했습니다.

로컬 컴퓨터에서 파일을 수정한 뒤 다시 commit하고 push하세요. 기존 Pull Request가 자동으로 업데이트됩니다.

### 다른 학생 폴더를 실수로 수정했습니다.

제출 전에 해당 변경을 되돌리세요. Pull Request에는 본인 폴더의 변경만 포함되어야 합니다.

### 잘못된 저장소에 제출했습니다.

즉시 교수자에게 연락하고 아래 정보를 함께 보내세요.

- 이름
- 잘못 제출한 저장소 또는 Pull Request 주소
- 올바른 저장소 또는 Pull Request 주소

## 참고 자료

- Fork 안내: <https://docs.github.com/en/get-started/quickstart/fork-a-repo>
- Pull Request 만들기: <https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request>
- Git 기본 설명: <https://docs.github.com/en/get-started/using-git/about-git>
