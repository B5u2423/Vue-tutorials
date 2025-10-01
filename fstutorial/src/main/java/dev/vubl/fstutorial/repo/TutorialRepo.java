package dev.vubl.fstutorial.repo;

import dev.vubl.fstutorial.model.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TutorialRepo extends JpaRepository<Tutorial, Long> {
  List<Tutorial> findByPublished(boolean isPublished);
  List<Tutorial> findByTitle(String title);
}
