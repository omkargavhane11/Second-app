import { useState,useEffect } from "react";
import Badge from '@mui/material/Badge';

export function Counter() {
  // let like = 0;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);



  return (
    <div className="Counter">

      <Badge onClick={() => setLike(like + 1)} className="bt-sz-lg" badgeContent={like} color="primary">
        👍
      </Badge>


      <Badge onClick={() => setDislike(dislike + 1)} className="bt-sz-lg" badgeContent={dislike} color="error">
        👎
      </Badge>

    </div>
  );
}
