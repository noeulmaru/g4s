<?
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
?>

<div id="scrap_do" class="new_win">
    <h1>스크랩하기</h1>

    <form name="f_scrap_popin" action="./scrap_popin_update.php" method="post">
    <input type="hidden" name="bo_table" value="<?=$bo_table?>">
    <input type="hidden" name="wr_id" value="<?=$wr_id?>">

    <table class="frm_tbl">
    <caption>제목 확인 및 댓글 쓰기</caption>
    <tbody>
    <tr>
        <th scope="row">제목</th>
        <td><?=get_text(cut_str($write['wr_subject'], 255))?></td>
    </tr>
    <tr>
        <th scope="row"><label for="wr_content">댓글</label></th>
        <td><textarea name="wr_content" id="wr_content"></textarea></td>
    </tr>
    </tbody>
    </table>

    <p class="new_win_desc">
        스크랩을 하시면서 감사 혹은 격려의 댓글을 남기실 수 있습니다.
    </p>

    <div class="btn_win">
        <input type="submit" value="스크랩" class="btn_submit">
    </div>
    </form>
</div>