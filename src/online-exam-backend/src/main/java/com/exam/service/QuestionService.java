package com.exam.service;

import com.exam.model.Question;
import com.exam.repository.QuestionRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class QuestionService {
    private final QuestionRepository repo;

    public QuestionService(QuestionRepository repo) {
        this.repo = repo;
    }

    public List<Question> getAll() { return repo.findAll(); }
    public Question save(Question q) { return repo.save(q); }
}
