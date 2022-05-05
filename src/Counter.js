import { useState, useEffect } from "react";
import Badge from '@mui/material/Badge';

export function Counter() {
  // let like = 0;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const incrementLike = () => setLike(like + 1);
  const incrementDislike = () => setDislike(dislike + 1);


  return (
    <div className="Counter">

      <Badge onClick={incrementLike} className="bt-sz-lg" badgeContent={like} color="primary">
        👍
      </Badge>


      <Badge onClick={incrementDislike} className="bt-sz-lg" badgeContent={dislike} color="error">
        👎
      </Badge>

    </div>
  );
}
