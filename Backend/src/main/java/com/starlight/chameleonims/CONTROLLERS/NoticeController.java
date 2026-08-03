package com.starlight.chameleonims.CONTROLLERS;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starlight.chameleonims.Notice;
import com.starlight.chameleonims.REPOSITORIES.NoticeRepository;

@RestController
@RequestMapping("/api/Notices")
@CrossOrigin(origins = "http://localhost:3000")
public class NoticeController {

    @Autowired
    private NoticeRepository noticeRepository;

    @GetMapping
    public List<Notice> getAllNotices() 
    {
        return noticeRepository.findAllByOrderByNoticeIdAsc();
    }
    
    @DeleteMapping("/Delete/{noticeId}")
    public ResponseEntity<?> deleteNoticeById(@PathVariable String noticeId)
    {
        if (!noticeRepository.existsById(noticeId)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Notice not found");
        }

        noticeRepository.deleteById(noticeId);

        return ResponseEntity.ok("Notice succesfully deleted");
    }

    @PostMapping("/AddNotice")
    public Notice createNotice(@RequestBody Notice notice) {
           return noticeRepository.save(notice);
    }
    
}